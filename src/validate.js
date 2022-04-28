async function validate() {
    let res = await fetch('./users.json');
    res = await res.json().then((data) => data);

    if (res.find((user) => user.name === 'Сергей')) {
        console.log("123");
    }
}

export default validate;