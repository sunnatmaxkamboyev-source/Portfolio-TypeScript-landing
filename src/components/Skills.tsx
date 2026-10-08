interface Skill{
    name: string;
    level: string;
}


interface SkillsProps{
    title: string;
    skills: Skill[];
}

function Skills({ title, skills }: SkillsProps){
    return (
        <section className="skills" id="skills">
            <h2>{title}</h2>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <div key={skill.name} className="skill-card">
                        <h3>{skill.name}</h3>
                        <p>{skill.level}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills;