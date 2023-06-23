import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { MOCK_EMPLOYEES } from "./MOCK_EMPLOYEES";
import { MOCK_GROUPS } from "./MOCK_GROUPS";

const app = express();
const port = process.env.PORT || 3041;

app.use(express.json()); // for parsing application/json
app.use(
	cors({
		origin: "http://localhost:3000", // Replace with your frontend server's URL
	})
);

const sendRes = (res: Response, statusCode: number = 200, data?: any) => {
	res.status(statusCode).json({
		success: true,
		data,
	});
};

//response handling

// GET Employees
app.get("/employees/:name", (req, res) => {
	const name = req.params.name;
	sendRes(res, 200, { employees: MOCK_EMPLOYEES });
});

// GET route 2
app.get("/groups/:name", (req, res) => {
	sendRes(res, 200, { groups: MOCK_GROUPS });
});

// GET employees from a group
app.get("/employees/:name/getByGroup", (req, res) => {
	const groupId = req.query.id;
	if (!groupId || typeof groupId !== "number" || isNaN(Number(groupId))) {
		return res.status(400).json({ message: "Invalid id" });
	}
	const found = MOCK_EMPLOYEES.filter((val, idx) => val.group_id === groupId);
	sendRes(res, 200, { employees: found });
});

// POST route
app.post("/employees/:name", (req, res) => {
	const { name, last_name, birthday } = req.body;
	const data = MOCK_EMPLOYEES;
	const id = data.length === 0 ? 0 : data[data.length - 1].id + 1;
	const newEmployee = {
		id,
		name,
		last_name,
		birthday,
		group_id: (() => Math.floor(Math.random() * 6) + 1)(),
	};
	//add to temp DB
	MOCK_EMPLOYEES.push(newEmployee);
	//all good response
	sendRes(res, 200, { message: "Employee posted correctly" });
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});

//eror handling
/* app.use((err: any, req: Request, res: Response, next: NextFunction) => {
	const { statusCode = 500, message } = err;
	console.error(err);
	res.status(statusCode).json({ message });
}); */
app.use((req, res, next) => {
	res.status(404).json({ message: "???" });
});
