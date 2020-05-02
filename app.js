//"https://coronavirus-19-api.herokuapp.com/countries"

// Vars
// World wide
const total = document.getElementById("total");
const active = document.getElementById("active");
const recovered = document.getElementById("recovered");
const deaths = document.getElementById("deaths");
const critical = document.getElementById("critical");
const todayDeaths = document.getElementById("today-deaths");
const todayCases = document.getElementById("today-cases");
const contries = document.querySelector(".countries");

// Countries

// LOGIC
const geStatistics = async () => {
	const { data } = await axios.get(
		"https://coronavirus-19-api.herokuapp.com/countries"
	);

	console.log(data);
	for (const country of data) {
		// addCountries(country);
		contries.append(addCountries(country));
	}
	const world = data.find((country) => country.country === "World");

	addstatistic(total, world.cases);
	addstatistic(active, world.active);
	addstatistic(recovered, world.recovered);
	addstatistic(deaths, world.deaths);
	addstatistic(critical, world.critical);
	addstatistic(todayDeaths, world.todayDeaths);
	addstatistic(todayCases, world.todayCases);
};

const addstatistic = (state, num) => {
	state.textContent = num;
};

const addCountries = (countries) => {
	const country = document.createElement("div");
	country.classList.add("country");
	country.innerHTML = `
		<h3>${countries.country}</h3>
		<ul>
			<li>Cases <span class="country-total">${countries.cases}</span></li>
			<li>Active: <span class="country-active">${countries.active}</span></li>
			<li>Deaths: <span class="country-deaths">${countries.deaths}</span></li>
			<li>Recovered: <span class="country-recovered">${countries.recovered}</span></li>
		</ul>
	`;
	return country;
};

geStatistics();
