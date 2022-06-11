import fs from "fs";
import path from "path";

export const getClientBundleJS = (): string => {
    // Get client Site Bundle JS
    const manifest = JSON.parse(
        fs.readFileSync(path.join(__dirname, "public/manifest.json"), "utf-8")
    );

    return manifest["main.js"];
};
