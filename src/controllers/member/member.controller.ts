import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { Member } from "../../schemas/member.schema";
import { MemberService } from "../../services/member/member.service";

@Controller('members')
export class MemberController {
    constructor(private readonly memberService: MemberService) { }

    @Post()
    async createProduct(@Res() response, @Body() member: Member) {
        const newMember = await this.memberService.create(member);
        return response.status(HttpStatus.CREATED).json({
            newMember
        });
    }

    @Get()
    async fetchAll(@Res() response) {
        const members = await this.memberService.readAll();
        return response.status(HttpStatus.OK).json({
            members
        });
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const member = await this.memberService.readById(id);
        return response.status(HttpStatus.OK).json({
            member
        });
    }

    @Put('/:id')
    async update(@Res() response, @Param('id') id, @Body() member: Member) {
        const updatedMember = await this.memberService.update(id, member);
        return response.status(HttpStatus.OK).json({
            updatedMember
        });
    }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const deletedMember = await this.memberService.delete(id);
        return response.status(HttpStatus.OK).json({
            deletedMember
        });
    }
}