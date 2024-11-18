import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../AdminComponents/database.jsx';
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
        <div className="memberProfileContainer">
            <button onClick={() => navigate(-1)} className="backButton">Back</button>
            <div className="memberDetails">
                <img src={member.pictureUrl} alt={member.name} className="memberProfileImage" />
                <h1>{member.name}</h1>
                <p>Club Rating: {member.rating}</p>
                <p>CFC Rating: {member.cfcRating}</p>
                <p>Rank: {member.rank}</p>
                <p>Joined Date: {new Date(member.joinedDate).toLocaleDateString()}</p>
                {member.role !== "None" && <p>Role: {member.role}</p>}
            </div>
        </div>
    );
};

export default MemberProfile;
