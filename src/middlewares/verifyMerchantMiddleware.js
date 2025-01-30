import jwt from "jsonwebtoken";
import { SECRET } from "../config.js";

export const verifyMerchantMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer")) {
            return res.status(401).json({ message: "Token is required" });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, SECRET);

        // Verifica si el usuario tiene el rol de MERCHANT
        if (!decoded.UserRoles || !decoded.UserRoles.includes("MERCHANT")) {
            return res.status(403).json({ message: "Access denied: Merchant role required" });
        }

        // Si el usuario es merchant, continúa con la ejecución de la ruta
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token is invalid", error });
    }
};
