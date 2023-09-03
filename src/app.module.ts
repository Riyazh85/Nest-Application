import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Member, MemberSchema } from './schemas/member.schema';
import { InvoiceController } from './controllers/invoice/invoice.controller';
import { MemberController } from './controllers/member/member.controller';
import { MemberService } from './services/member/member.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1/society'),
  MongooseModule.forFeature([{ name: Member.name, schema: MemberSchema }])],
  controllers: [AppController, MemberController, InvoiceController],
  providers: [AppService, MemberService],
})
export class AppModule { }
