let x = new Promise((resolve, reject) => {
    let error = true
    if (error) reject('Something went wrong')
    resolve({ username: 'grazo@04', name: 'Harshil', number: '49' })
})

let run = async () => {
    try {
        console.log(await x);
    } catch (error) {
        console.log(error);
    }
}
run()

// ----------------------------------------------------------------------------------------

fetch('https://api.github.com/users/harshiile')
    .then((res) => { return res.json() })
    .then((data) => { console.log(Object.keys(data)) })
    .catch((err) => { console.log(err) })