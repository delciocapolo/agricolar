Promise.all([
    fetch(`http://localhost:4001/bi/${contentTextFieldNIF}`),
    fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${import.meta.env.VITE_APIKEY_IPGEOLOCATION}`)
]).then(async (response) => {
    const [BIDataFetch, LocationDataFetch] = response.map((data) => data.json());
    const { data } = await BIDataFetch;

    if (data) {
        const { state_prov, city } = await LocationDataFetch;

        const {
            nome,
            naturalidade,
            genero,
            data_nasc,
            estado_civil,
            nif,
            numero,
        } = data;

        console.log("OS DADOS DO FAZENDEIRO: ");
        console.log(data);

        console.log("OS DADOS DA LOCATION: ");
        console.log(state_prov, city);

        setFormValues(prev => ({
            ...prev,
            name: nome,
            born: data_nasc,
            email: contentTextFieldEmail,
            gender: genero,
            civilRule: estado_civil,
            birthplace: naturalidade,
            biSingleNumber: numero,
            nif,
            typeUser: 'farmer',
            password: 'angola',
            confirmPassword: 'angola',
            location: {
                state_prov,
                city
            },
            phone: 993895962,
            pathImage: 'angola',
        }));

        console.log(formValues);

        if (!validateSchema.safeParse(formValues).success) {
            console.error('Error to match datas from the datas with schema validate!');
            return;
        }
    }
})