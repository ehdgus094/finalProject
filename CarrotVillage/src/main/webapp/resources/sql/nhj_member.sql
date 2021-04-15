drop table member cascade constraints;
create table member (
	id				varchar2(20)	primary key,
	password		varchar2(60),
	email			varchar2(50) 	not null,
	name			varchar2(30)	not null,
	post			varchar2(10),
	address			varchar2(100),
	phone_num		varchar2(20),
	birth			varchar2(8),
	gender			varchar2(5)		check (gender in ('m', 'f', 'x')),
	profile_img		varchar2(200),
	profile_img_ori	varchar2(200),
	subscribe		number			default 0,
	subscribe_name	varchar2(50),
	regi_date		date			default sysdate,
	auth_lev		varchar2(10)	default 'none' check (auth_lev in ('admin', 'flea_admin', 'meetup_admin', 'mart_admin', 'none')),
	is_seller		varchar2(1)		default '0' check (is_seller in ('0', '1')),
	login_type		varchar2(20)	default 'normal'
);

select * from member;
delete from member;

/*---------------------------------------------------------------------------------*/

drop sequence chat_room_seq;
create sequence chat_room_seq;
drop table chat_room cascade constraints;
create table chat_room (
	num    	number    	primary key,
	num_of  number(20) 
);
select * from chat_room;

drop sequence chat_join_seq;
create sequence chat_join_seq;
drop table chat_join;
create table chat_join (
	num				number			primary key,
	member_id		varchar2(20)	references member(id),
	chat_room_num	number			references chat_room(num)
);
select * from chat_join;

drop sequence chat_message_seq;
create sequence chat_message_seq;
drop table chat_message;
create table chat_message (
	num				number				primary key,
	message 		varchar2(1000),
	chat_date		date				default sysdate,
	member_id		varchar2(20)		references member(id),
	chat_room_num	number				references chat_room(num)
);


select *
from CHAT_ROOM
where num_of = 2
and num in (
	select aaaaa.chat_room_num
	from chat_join aaaaa 
	join chat_join naver99678673 
	on aaaaa.chat_room_num = naver99678673.chat_room_num
	and aaaaa.member_id = 'aaaaa'
	and naver99678673.member_id = 'naver99678673'
);
					  						  
select max(num) from CHAT_ROOM;

insert into CHAT_JOIN
values (chat_join_seq.nextval, 'naver99678673', 1);


select chat_room_num
from chat_join
where member_id = 'naver99678673';

select member_id
from CHAT_JOIN
where chat_room_num = 1;


