const Country = require('../models/Country');

async function index(req, res) {
    try {
        const countries = await Country.getAll();
        res.status(200).json(countries);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
}

async function show(req, res) {
    try {
        let country_name = req.params.countryName.toLowerCase();
        console.log();
        const country = await Country.getOneByCountryName(country_name);
        res.status(200).json(country);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
}

async function create(req, res) {
    try {
        const data = req.body;
        const newCountry = await Country.Create(data);
        res.status(201).json(newCountry);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
}

async function destroy(req, res) {
    try {
        const countryName = req.params.countryName
        const this_country = await Country.getOneByCountryName(countryName)
        this_country.RemoveCountry()
        res.status(204).end();
    } catch(err) {
        res.status(500).json({err: err.message})
    }
}

async function update(req, res) {
    try {
        const countryName = req.params.countryName;
        const data = req.body;
        const this_country = await Country.getOneByCountryName(countryName);
        
        // Assuming you have a method to update the country
        const updated_country = await this_country.UpdateCountry(data);

        // Content modified
        res.status(200).json(updated_country);
    } catch(err) {
        res.status(500).json({err: err.message})
    }
}
module.exports = { index, show, create, destroy, update};

