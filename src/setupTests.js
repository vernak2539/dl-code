const Enzyme = require("enzyme");
const EnzymeAdapter = require("enzyme-adapter-react-16");
const fetch = require("jest-fetch-mock");

global.fetch = fetch;

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
