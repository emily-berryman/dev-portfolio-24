import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ButtonTable = () => {
	return (
		<Table cellSpacing={0} cellPadding={0}>
			<tr>
				<th></th>
				<th>Primary</th>
				<th>Secondary</th>
			</tr>
			<tr>
				<td>Small</td>
				<td>
					<Button variant="primary" href="case-study">
						Case Study
					</Button>
				</td>
				<td>
					<Button variant="secondary">Button</Button>
				</td>
			</tr>
		</Table>
	);
};
const Table = styled.table`
	th,
	td {
		text-align: center;
		padding: 16px;
	}
	th {
		border-bottom: 1px solid hsl(0deg 0% 80%);
	}
	td:first-of-type,
	th:first-of-type {
		border-right: 1px solid hsl(0deg 0% 80%);
	}
	td:first-of-type {
		text-align: right;
	}
`;

export default ButtonTable;
