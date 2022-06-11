import React from 'react'
import "./team.css";
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";


function Team() {
    return <>
    <div className='container mx-auto'id="team-section">
    <h1 className='pt-20 team-heading text-white  m-auto sm:text-right text-left font-garmani lg:text-[62px] text-[26px] font-normal sm:leading-[88px] leading-[42px] wow fadeInDown' data-wow-delay=".5s"><span className='heading-border'><hr /></span>Meet The Team</h1>
        <section className='flex justify-start  mb-32 sm:mt-12 mt-6 m-auto team flex-wrap team-box lg:justify-start justify-center'>
            <span className=''>
                <TeamMembers teamMember={team1} name="Mo" profession="Founder/CEO" />
            </span>
            <TeamMembers teamMember={team2} name="Shaun" profession="Co-Founder/Marketing" />
            <TeamMembers teamMember={team2} name="Steve" profession="Project Lead/CFO" />
            <TeamMembers teamMember={team2} name="Jesse" profession="Social Media Manager" />
            <TeamMembers teamMember={team2} name="Anoop" profession="Contract Developer" />
            <TeamMembers teamMember={team2} name="Hamza" profession="Graphic Designer" />
            <TeamMembers teamMember={team2} name="Prince" profession="Developer" />
            <TeamMembers teamMember={team2} name="Leon" profession="Community Manager" />
        </section>
    </div>
    </>;
}

const TeamMembers = ({ teamMember, name, profession, }) => {
    return <>
        <div className='flex flex-col text-white wow fadeInUp' data-wow-delay=".5s">
            <div className='team-Div' data-aos='slide-left'
                data-aos-anchor-placement="center-center">
                <img src={teamMember} alt="" />
            </div>
            <h3 data-aos='slide-up'
                data-aos-anchor-placement="center-center" className='text-2xl font-bold mt-3 team-name'>{name}</h3>
            <p data-aos='slide-up'
                data-aos-anchor-placement="center-center" className='text-sm text-gray-400 team-pro'>{profession}</p>

        </div>

    </>;
}


export default Team