import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Member, MemberDocument } from "../../schemas/member.schema";

@Injectable()
export class MemberService {

    constructor(@InjectModel(Member.name) private memberModel: Model<MemberDocument>) { }

    async create(member: Member): Promise<Member> {
        const newMember = new this.memberModel(member);
        return newMember.save();
    }

    async readAll(): Promise<Member[]> {
        return await this.memberModel.find().exec();
    }

    async readById(id): Promise<Member> {
        return await this.memberModel.findById(id).exec();
    }

    async update(id, member: Member): Promise<Member> {
        return await this.memberModel.findByIdAndUpdate(id, member, { new: true })
    }

    async delete(id): Promise<any> {
        return await this.memberModel.findByIdAndRemove(id);
    }
}