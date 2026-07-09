import { useEffect, useRef } from "react";
import * as THREE from "three";

const CW = 1000;
const CH = 630;
const RADIUS = 34;

function roundedClip(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.roundRect(0, 0, CW, CH, RADIUS);
    ctx.clip();
}

function drawKazakhFlag(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number) {
    const grad = ctx.createLinearGradient(x, y, x, y + h);
    grad.addColorStop(0, "#4FC3E8");
    grad.addColorStop(1, "#00A0C6");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, 6);
    ctx.fill();

    const cx = x + w / 2, cy = y + h / 2, r = h * 0.3;
    ctx.strokeStyle = "rgba(255,214,0,.85)";
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
        ctx.lineTo(cx + Math.cos(a) * (r + 8), cy + Math.sin(a) * (r + 8));
        ctx.stroke();
    }
    ctx.fillStyle = "#FFD600";
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
}

function drawSilhouette(ctx: CanvasRenderingContext2D, cx: number, cy: number, scale: number) {
    ctx.fillStyle = "#C7D2CB";
    ctx.beginPath();
    ctx.arc(cx, cy - 26 * scale, 34 * scale, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(cx - 58 * scale, cy + 92 * scale);
    ctx.quadraticCurveTo(cx - 50 * scale, cy + 18 * scale, cx, cy + 14 * scale);
    ctx.quadraticCurveTo(cx + 50 * scale, cy + 18 * scale, cx + 58 * scale, cy + 92 * scale);
    ctx.closePath();
    ctx.fill();
}

function drawBarcode(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, seed: number) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.clip();
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(x, y, w, h);
    let cx = x;
    let s = seed;
    const rand = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
    ctx.fillStyle = "#12241C";
    while (cx < x + w) {
        const bw = 1.5 + rand() * 3.5;
        if (rand() > 0.45) ctx.fillRect(cx, y, bw, h);
        cx += bw + 1;
    }
    ctx.restore();
}

function drawQr(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, seed: number) {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(x, y, size, size);
    const grid = 21;
    const cell = size / grid;
    let s = seed;
    const rand = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
    ctx.fillStyle = "#12241C";
    for (let r = 0; r < grid; r++) {
        for (let c = 0; c < grid; c++) {
            const inFinder =
                (r < 7 && c < 7) || (r < 7 && c >= grid - 7) || (r >= grid - 7 && c < 7);
            if (inFinder) continue;
            if (rand() > 0.58) ctx.fillRect(x + c * cell, y + r * cell, cell * 0.92, cell * 0.92);
        }
    }
    // finder squares (top-left, top-right, bottom-left)
    [[0, 0], [grid - 7, 0], [0, grid - 7]].forEach(([fc, fr]) => {
        ctx.fillStyle = "#12241C";
        ctx.fillRect(x + fc * cell, y + fr * cell, cell * 7, cell * 7);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(x + (fc + 1) * cell, y + (fr + 1) * cell, cell * 5, cell * 5);
        ctx.fillStyle = "#12241C";
        ctx.fillRect(x + (fc + 2) * cell, y + (fr + 2) * cell, cell * 3, cell * 3);
    });
}

function drawFrontFace(): HTMLCanvasElement {
    const canvas = document.createElement("canvas");
    canvas.width = CW; canvas.height = CH;
    const ctx = canvas.getContext("2d")!;
    roundedClip(ctx);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, CW, CH);

    drawKazakhFlag(ctx, 40, 30, 118, 74);

    ctx.textAlign = "center";
    ctx.fillStyle = "#12241C";
    ctx.font = "700 26px Arial";
    ctx.fillText("KAZAKHSTAN INTERNATIONAL", CW / 2, 56);
    ctx.fillText("STUDENT DIGITAL ID", CW / 2, 90);

    // brand mark, top-right
    ctx.fillStyle = "#0B6E4F";
    ctx.beginPath();
    ctx.roundRect(CW - 158, 30, 118, 74, 10);
    ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.font = "800 22px Arial";
    ctx.fillText("IMS PASS", CW - 99, 74);
    ctx.textAlign = "left";

    ctx.strokeStyle = "#E1E8E3";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(40, 128);
    ctx.lineTo(CW - 40, 128);
    ctx.stroke();

    // photo box
    ctx.fillStyle = "#F1F5F1";
    ctx.strokeStyle = "#E1E8E3";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(40, 160, 230, 290, 14);
    ctx.fill();
    ctx.stroke();
    drawSilhouette(ctx, 155, 300, 1.15);

    drawBarcode(ctx, 40, 470, 230, 46, 7);
    ctx.fillStyle = "#8b93a5";
    ctx.font = "500 13px monospace";
    ctx.textAlign = "center";
    ctx.fillText("24B091634", 155, 536);
    ctx.textAlign = "left";

    // right info column
    const colX = 314;
    ctx.fillStyle = "#5B6B63";
    ctx.font = "600 15px Arial";
    ctx.fillText("First, Middle, Surname", colX, 172);
    ctx.fillStyle = "#12241C";
    ctx.font = "800 30px Arial";
    ctx.fillText("Amina T. Student", colX, 210);

    ctx.fillStyle = "#5B6B63";
    ctx.font = "600 15px Arial";
    ctx.fillText("Date of Birth", colX, 258);
    ctx.fillText("Sex", colX + 260, 258);
    ctx.fillStyle = "#12241C";
    ctx.font = "700 20px Arial";
    ctx.fillText("14/03/2003", colX, 288);
    ctx.fillText("Female", colX + 260, 288);

    ctx.fillStyle = "#5B6B63";
    ctx.font = "600 15px Arial";
    ctx.fillText("Country of Citizenship", colX, 336);
    ctx.fillStyle = "#12241C";
    ctx.font = "700 20px Arial";
    ctx.fillText("Kazakhstani", colX, 366);

    ctx.fillStyle = "#5B6B63";
    ctx.font = "600 15px Arial";
    ctx.fillText("School Name", colX, 414);
    ctx.fillStyle = "#12241C";
    ctx.font = "700 19px Arial";
    ctx.fillText("Partner International University", colX, 444);

    ctx.strokeStyle = "#F1F5F1";
    ctx.beginPath();
    ctx.moveTo(colX, 470);
    ctx.lineTo(CW - 40, 470);
    ctx.stroke();
    ctx.fillStyle = "#5B6B63";
    ctx.font = "700 15px Arial";
    ctx.fillText("ID:", colX, 506);
    ctx.fillStyle = "#12241C";
    ctx.font = "700 20px monospace";
    ctx.fillText("IMS-2026-08841", colX + 34, 506);

    return canvas;
}

function drawBackFace(): HTMLCanvasElement {
    const canvas = document.createElement("canvas");
    canvas.width = CW; canvas.height = CH;
    const ctx = canvas.getContext("2d")!;
    roundedClip(ctx);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, CW, CH);

    ctx.fillStyle = "#12241C";
    ctx.font = "800 26px Arial";
    ctx.fillText("ADDITIONAL INFO", 40, 66);

    const rowX = 40;
    const field = (label: string, value: string, x: number, y: number, color = "#12241C", size = 22) => {
        ctx.fillStyle = "#5B6B63";
        ctx.font = "600 15px Arial";
        ctx.fillText(label, x, y);
        ctx.fillStyle = color;
        ctx.font = `700 ${size}px Arial`;
        ctx.fillText(value, x, y + 32);
    };

    field("Date of Issue", "10/10/2026", rowX, 128);
    field("Date of Expiry", "15/11/2030", rowX + 260, 128, "#B8451F");
    field("Phone Number", "+7 747 977 7542", rowX, 220);
    field("City / Region", "Almaty", rowX, 312);
    field("School Address", "Tole Bi 59, Almaty", rowX, 404);

    ctx.fillStyle = "#F1F5F1";
    ctx.beginPath();
    ctx.roundRect(rowX, 470, 500, 66, 10);
    ctx.fill();
    ctx.fillStyle = "#5B6B63";
    ctx.font = "600 13px Arial";
    ctx.fillText("IIN", rowX + 20, 496);
    ctx.fillStyle = "#12241C";
    ctx.font = "700 24px monospace";
    ctx.fillText("9087 6896 5312", rowX + 20, 524);

    ctx.fillStyle = "#8b93a5";
    ctx.font = "500 13px Arial";
    ctx.fillText("If found, return to the issuing organization or nearest police station.", rowX, 588);

    drawQr(ctx, CW - 300, 130, 260, 13);
    ctx.fillStyle = "#12241C";
    ctx.font = "700 18px Arial";
    ctx.textAlign = "center";
    ctx.fillText("SCAN TO VERIFY", CW - 170, 424);
    ctx.fillStyle = "#8b93a5";
    ctx.font = "500 13px Arial";
    ctx.fillText("IMS Blockchain Verified", CW - 170, 448);
    ctx.textAlign = "left";

    return canvas;
}

// A floating, gently-rotating pair of 3D "digital ID cards" (front + back
// faces drawn from real card data, not a static image) fanned out like a
// physical card photograph, plus a soft particle field behind them.
export default function IdCardHero3D() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;
        const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

        const width = mount.clientWidth;
        const height = mount.clientHeight;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
        renderer.setSize(width, height);
        mount.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
        camera.position.set(0, 0, 10.5);

        const group = new THREE.Group();
        scene.add(group);

        const CARD_W = 4.6, CARD_H = CARD_W * (CH / CW), CARD_D = 0.05;

        function makeCard(canvas: HTMLCanvasElement): THREE.Mesh {
            const tex = new THREE.CanvasTexture(canvas);
            tex.colorSpace = THREE.SRGBColorSpace;
            tex.anisotropy = 8;
            const faceMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5, metalness: 0.05 });
            const edgeMat = new THREE.MeshStandardMaterial({ color: 0xeef2ef, roughness: 0.6 });
            const geo = new THREE.BoxGeometry(CARD_W, CARD_H, CARD_D);
            // box face order: +x -x +y -y +z -z
            const mats = [edgeMat, edgeMat, edgeMat, edgeMat, faceMat, edgeMat];
            return new THREE.Mesh(geo, mats);
        }

        // Both cards share the same facing (x/y rotation) so they read as a
        // clean fanned pair, like two photos laid on a table, rather than
        // crossing through each other. Only a small extra Z "roll" on the
        // back card creates the fan, and it sits purely down-right and
        // behind the front card in depth.
        const SHARED_ROT_X = -0.05;
        const SHARED_ROT_Y = 0.2;

        const backCard = makeCard(drawBackFace());
        backCard.position.set(0.62, -0.46, -0.32);
        backCard.rotation.set(SHARED_ROT_X, SHARED_ROT_Y, 0.16);
        group.add(backCard);

        const frontCard = makeCard(drawFrontFace());
        frontCard.position.set(-0.5, 0.34, 0.32);
        frontCard.rotation.set(SHARED_ROT_X, SHARED_ROT_Y, -0.03);
        group.add(frontCard);

        group.rotation.set(-0.05, 0.08, 0.02);

        // ---- soft ambient particle field behind the cards ----
        const PCOUNT = 70;
        const positions = new Float32Array(PCOUNT * 3);
        for (let i = 0; i < PCOUNT; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 15;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = -Math.random() * 6 - 2.5;
        }
        const dotCanvas = document.createElement("canvas");
        dotCanvas.width = dotCanvas.height = 64;
        const dctx = dotCanvas.getContext("2d")!;
        const grad = dctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, "rgba(201,152,46,.9)");
        grad.addColorStop(1, "rgba(201,152,46,0)");
        dctx.fillStyle = grad;
        dctx.fillRect(0, 0, 64, 64);
        const particleGeo = new THREE.BufferGeometry();
        particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        const particleMat = new THREE.PointsMaterial({
            size: 0.14, map: new THREE.CanvasTexture(dotCanvas), transparent: true, opacity: 0.5,
            depthWrite: false, sizeAttenuation: true,
        });
        const particles = new THREE.Points(particleGeo, particleMat);
        scene.add(particles);

        scene.add(new THREE.AmbientLight(0xffffff, 1.3));
        const key = new THREE.DirectionalLight(0xffffff, 1.2);
        key.position.set(3, 4, 6);
        scene.add(key);
        const fill = new THREE.PointLight(0x0b6e4f, 1.6, 20);
        fill.position.set(-3, -2, 3);
        scene.add(fill);
        const rim = new THREE.DirectionalLight(0xc9982e, 0.5);
        rim.position.set(-4, 2, -2);
        scene.add(rim);

        let targetX = 0, targetY = 0;
        function onPointerMove(e: PointerEvent) {
            const rect = mount!.getBoundingClientRect();
            targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
            targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        }

        let raf = 0;
        let t = 0;
        let autoAngle = 0;
        function tick() {
            t += 0.01;
            // Continuous self-rotation is the primary motion; the pointer only
            // nudges it slightly on top, so the cards keep turning on their
            // own even when nobody is moving the mouse.
            autoAngle += 0.0035;
            group.rotation.y += (autoAngle + targetX * 0.18 - group.rotation.y) * 0.06;
            group.rotation.x += (-0.08 - targetY * 0.12 - group.rotation.x) * 0.06;
            group.position.y = Math.sin(t) * 0.1;
            particles.rotation.y += 0.0006;
            renderer.render(scene, camera);
            raf = requestAnimationFrame(tick);
        }

        function resize() {
            const w = mount!.clientWidth, h = mount!.clientHeight;
            renderer.setSize(w, h);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        }

        addEventListener("resize", resize);
        if (!reduceMotion) {
            addEventListener("pointermove", onPointerMove, { passive: true });
            tick();
        } else {
            renderer.render(scene, camera);
        }

        return () => {
            cancelAnimationFrame(raf);
            removeEventListener("resize", resize);
            removeEventListener("pointermove", onPointerMove);
            renderer.dispose();
            mount!.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} style={{ width: "100%", height: "100%", minHeight: 360 }} />;
}
