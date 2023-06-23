const names = [
	"John",
	"Emma",
	"Oliver",
	"Amelia",
	"Harry",
	"Isabella",
	"Charlie",
	"Emily",
	"James",
	"Sam",
	"Sophia",
	"Sussus",
	"Higa",
];
const lasts = [
	"Smith",
	"Johnson",
	"Williams",
	"Brown",
	"Jones",
	"Miller",
	"Davis",
	"Garcia",
	"Rodriguez",
	"Wilson",
	"Charlie",
	"Emily",
	"James",
	"Sophia",
	"Amogus",
	"Dadrip",
];

//mocked data based on the og server response (employees.json)
export const MOCK_EMPLOYEES = [
	{
		id: 0,
		name: "John",
		last_name: "Doe",
		birthday: 631152000,
		group_id: 1,
	},
	{
		id: 1,
		name: "Jane",
		last_name: "Doe",
		birthday: 662688000,
		group_id: 2,
	},
	...Array(41)
		.fill({})
		.map((_, idx) => {
			const val = (() => Math.floor(Math.random() * 6) + 1)();
			const name = names[Math.floor(Math.random() * names.length)];
			const last = lasts[Math.floor(Math.random() * lasts.length)];

			return {
				id: idx + 3,
				name: name,
				last_name: last,
				birthday: new Date(val, 0),
				group_id: val,
			};
		}),
];
