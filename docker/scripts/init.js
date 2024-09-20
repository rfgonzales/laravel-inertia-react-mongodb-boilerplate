db = db.getSiblingDB("admin"); // Switch to the admin database
db.createUser({
    user: "root",
    pwd: "admin", // Change this to a secure password
    roles: [{ role: "root", db: "admin" }],
});
