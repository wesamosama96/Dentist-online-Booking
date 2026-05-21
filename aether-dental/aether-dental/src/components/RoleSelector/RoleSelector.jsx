import React from 'react';
import { useState } from 'react';
import styles from './RoleSelector.module.css';
import RoleCard from './RoleCard/RoleCard';

const roles = [
  { id: 'patient', label: 'Patient', icon: 'bi bi-person'      },
  { id: 'doctor',  label: 'Doctor',  icon: 'bi bi-bag-plus'    },
  { id: 'admin',   label: 'Admin',   icon: 'bi bi-person-gear' },
];

function RoleSelector() {

  const [selectedRole, setSelectedRole] = useState('patient');

  return (
    <div className={styles.wrapper}>

     
      <p className={styles.label}>I am a...</p>

     
      <div className={styles.cardRow}>
        {roles.map((role) => (
          <RoleCard
            key={role.id}
            icon={role.icon}
            label={role.label}
            selected={selectedRole === role.id}
            onClick={() => setSelectedRole(role.id)}
          />
        ))}
      </div>

    </div>
  );
}

export default RoleSelector;
