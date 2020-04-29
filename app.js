//"https://coronavirus-19-api.herokuapp.com/countries"

// Vars
const total = document.getElementById("total");
const active = document.getElementById("active");
const recovered = document.getElementById("recovered");
const deaths = document.getElementById("deaths");
const critical = document.getElementById("critical");
const todayDeaths = document.getElementById("today-deaths");
const todayCases = document.getElementById("today-cases");

// LOGIC
const geStatistics = async () => {
	const { data } = await axios.get(
		"https://coronavirus-19-api.herokuapp.com/countries"
	);
	const world = data.find((country) => country.country === "World");
	console.log(world);

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

geStatistics();
