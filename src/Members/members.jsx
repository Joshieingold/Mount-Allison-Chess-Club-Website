import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../AdminComponents/database.jsx';
import "./members.css";

const Members = () => {
    const [members, setMembers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterRole, setFilterRole] = useState('All');
    const [filterRank, setFilterRank] = useState('All');
    const navigate = useNavigate();

    const membersCollectionRef = collection(db, 'players');

    const fetchMembers = async () => {
        const data = await getDocs(membersCollectionRef);
        const membersList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        membersList.sort((a, b) => b.rating - a.rating); // Sort by highest rating
        setMembers(membersList);
    };

    useEffect(() => {
        fetchMembers();
    }, []);

    const filteredMembers = members.filter((member) => {
        const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = filterRole === 'All' || 
            (filterRole === 'Members' && member.role === 'None') || 
            (filterRole === 'Executives' && member.role !== 'None' && !member.role.includes('Former')) || 
            (filterRole === 'Former Executives' && member.role.includes('Former'));
        const matchesRank = filterRank === 'All' || member.rank === filterRank; // Add rank filtering

        return matchesSearch && matchesRole && matchesRank;
    });

    const handleMemberClick = (memberId) => {
        navigate(`/members/${memberId}`);
    };

    return (
        <div className="membersContainer">
            <h1 className="membersTitle">Club Members</h1>

            <div className="filterControls">
                <input
                    type="text"
                    placeholder="Search by name..."
                    className="inputBox filter"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    className="inputBox filter"
                    value={filterRole}
                    onChange={(e) => setFilterRole(e.target.value)}
                >
                    <option value="All">All Roles</option>
                    <option value="Members">Members</option>
                    <option value="Executives">Executives</option>
                    <option value="Former Executives">Former Executives</option>
                </select>
                <select
                    className="inputBox filter"
                    value={filterRank}
                    onChange={(e) => setFilterRank(e.target.value)}
                >
                    <option value="All">All Ranks</option>
                    {/* Add specific rank options here based on your data */}
                    <option value="Pawn">Pawn</option>
                    <option value="Knight">Knight</option>
                    <option value="Bishop">Bishop</option>
                    <option value="Rook">Rook</option>
                    <option value="Queen">Queen</option>
                    <option value="King">King</option>
                    {/* Add more ranks as necessary */}
                </select>
            </div>

            <ul className="membersList">
                {filteredMembers.map((member) => (
                    <li
                        key={member.id}
                        className="memberCard"
                        onClick={() => handleMemberClick(member.id)}
                    >
                        <img src={member.pictureUrl} alt={member.name} className="memberImage" />
                        <div className="memberInfo">
                            <p>{member.name}</p>
                            <p>Club Rating: {member.rating}</p>
                            <p>Rank: {member.rank}</p>
                            {member.role !== "None" && <p>Role: {member.role}</p>}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Members;