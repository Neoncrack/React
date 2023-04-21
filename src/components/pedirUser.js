import data from "../data/DataDoc.json";

const pedirUser = () => {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

export default pedirUser;