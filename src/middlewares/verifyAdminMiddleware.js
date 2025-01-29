import jwt from "jsonwebtoken";
import { SECRET } from "../config.js";

export const verifyAdminMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer")) {
            return res.status(401).json({ message: "Token is required" });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, SECRET);

        // Verifica si el usuario tiene el rol de admin
        if (!decoded.UserRoles || !decoded.UserRoles.includes("ADMIN")) {
            return res.status(403).json({ message: "Access denied: Admin role required" });
        }

        // Si el usuario es admin, continúa con la ejecución de la ruta
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token is invalid", error });
    }
};
