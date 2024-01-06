try {
    print("CREATING USER")

    db.createUser(
        {
            user: "mongouser",
            pwd: "password",
            roles: [
                {
                    role: "readWrite",
                    db: "nodejs-base-build-db"
                }
            ]
        }
    );
} catch (error) {
    print(`Failed to create developer db user:\n${error}`);
}