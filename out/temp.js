function axiosTest() {
    var strr = [];
    axios
        .get(url)
        .then(function (response) {
        strr.push(response.data);
    })
        .catch(function (error) {
        console.log(error);
    });
    return strr;
}
//# sourceMappingURL=temp.js.map