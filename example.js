(function(){
	'use strict';
	
	// Cities from https://en.wikipedia.org/wiki/World%27s_largest_municipalities_by_population
	var terms = ['Shanghai', 'Karachi', 'Mumbai', 'Delhi', 'Ahmedabad', 'Istanbul', 'São Paulo', 'Moscow', 'Seoul', 'Beijing', 'Mexico City', 'Tokyo', 'Kinshasa', 'Jakarta', 'New York City', 'Lima', 'London', 'Bogotá', 'Tehran', 'Ho Chi Minh City', 'Hanoi', 'Hong Kong', 'Bangkok', 'Dhaka', 'Cairo', 'Lahore', 'Rio de Janeiro', 'Chongqing', 'Chennai', 'Bengaluru', 'Tianjin', 'Baghdad', 'Kolkata', 'Singapore', 'Riyadh', 'Saint Petersburg', 'Surat', 'Yangon', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Harbin', 'Qingdao', 'Changchun', 'Xi\'an', 'Nanjing', 'Shenyang', 'Dalian', 'Jinan', 'Dongguan', 'Zhanjiang', 'Maoming', 'Shijiazhuang', 'Shantou', 'Foshan', 'Meizhou', 'Huizhou', 'Jiangmen', 'Jieyang', 'Hangzhou', 'Ningbo', 'Wenzhou', 'Jiaxing', 'Jinhua', 'Shaoxing', 'Taizhou', 'Alexandria', 'Shenyang', 'Hyderabad', 'Ankara', 'Johannesburg', 'Los Angeles', 'Wuhan', 'Yokohama', 'Abidjan', 'Busan', 'Cape Town', 'Durban', 'Pune', 'Berlin', 'Pyongyang', 'Jeddah', 'Kanpur', 'Madrid', 'Jaipur', 'Buenos Aires', 'Nairobi'];

	var myAutocomplete = new Autocomplete(terms);

	console.log(
		myAutocomplete.filter('ba')
	);
}());