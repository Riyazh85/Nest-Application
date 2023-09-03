import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type MemberDocument = Member & Document;

@Schema()
export class Member {

    @Prop()
    id: string;

    @Prop()
    name: string;

    @Prop()
    occupancy: string;

    @Prop()
    wing: string;

    @Prop()
    contact: string;
}

export const MemberSchema = SchemaFactory.createForClass(Member);