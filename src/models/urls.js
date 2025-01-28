import { nanoid } from "nanoid";
import { eq } from "drizzle-orm";

export default class {
	constructor(db, table) {
		this.db = db;
		this.table = table;
	}

	async create(origin) {
		return await this.db
			.insert(this.table)
			.values({
				origin,
				short: nanoid(10),
			})
			.returning();
	}

	async getOriginFromShort(short) {
		const result = await this.db
			.select()
			.from(this.table)
			.where(eq(this.table.short, short))
			.limit(1);
		return result.at(0);
	}
}
