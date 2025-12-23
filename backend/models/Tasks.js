module.exports = (sequelize, Datatypes) => {

    const Tasks = sequelize.define("Tasks", {
        content: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        completed: {
            type: Datatypes.BOOLEAN,
            defaultValue: false,
        }
    });

    return Tasks;
}