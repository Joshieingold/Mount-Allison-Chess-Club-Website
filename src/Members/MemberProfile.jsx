import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../AdminComponents/database.jsx';
import cfc from "../assets/cfcLogo.png";
import logo from "../assets/mtachesslogo.png";
import "./memberProfile.css";

const MemberProfile = () => {
    const { memberId } = useParams();
    const [member, setMember] = useState(null);
    const navigate = useNavigate();

    const fetchMember = async () => {
        const memberDoc = doc(db, 'players', memberId);
        const memberData = await getDoc(memberDoc);
        setMember(memberData.exists() ? { ...memberData.data(), id: memberData.id } : null);
    };

    useEffect(() => {
        fetchMember();
    }, [memberId]);

    if (!member) {
        return <p>Loading member details...</p>;
    }

    return (

        <div className="MainContainer">
            <div className="PlayerCard">
                
                <div className='PictureContainer'>
                    <img src={member.pictureUrl} alt={member.name} className="memberProfileImage" />
                    {/*MEMBER RANK IMAGE */}
                </div>
                <div className='DetailContainer'>
                    <div className='Name'>
                        <h1 className='Text'>{member.name}</h1>
                    </div>
                    <div className='EloContainer'>
                        <div className='OrgContainer'>
                            <div className='LogoPictureContainer'>
                                <img className='OrgLogo' src={cfc}/>
                            </div>
                            <p className='EloText'>{member.cfcRating}</p>
                        </div>
                        <div className='OrgContainer'>
                            <div className='LogoPictureContainer'>
                                <img className='OrgLogo' src={logo}/>
                            </div>
                            <p className='EloText'>{member.rating}</p>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default MemberProfile;
