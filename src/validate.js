async function validate() {
    let res = await fetch('./users.json');
    res = await res.json().then((data) => data);

    console.log(res.name);
}

export default validate;
