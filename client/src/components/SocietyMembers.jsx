import member1 from "../assets/society-member-1.jpg";
import member2 from "../assets/society-member-2.jpg";
import member3 from "../assets/society-member-3.jpg";
import member4 from "../assets/society-member-4.jpg";
import member5 from "../assets/society-member-5.jpg";
import member6 from "../assets/society-member-6.jpg";
import member7 from "../assets/society-member-7.jpg";

const members = [
  { image: member1, label: "Society Member 1" },
  { image: member2, label: "Society Member 2" },
  { image: member3, label: "Society Member 3" },
  { image: member4, label: "Society Member 4" },
  { image: member5, label: "Society Member 5" },
  { image: member6, label: "Society Member 6" },
  { image: member7, label: "Society Member 7" }
];

function SocietyMembers() {
  return (
    <section id="society" className="section society-section">
      <div className="container">
        <div className="section-heading society-heading">
          <div className="eyebrow">Our Society</div>
          <h2>Shri Jai Ram Ganga Ram Education Society</h2>
          <p>
            The people associated with the Shri Jai Ram Ganga Ram Education Society
            contribute to the school's vision of education, knowledge, character and progress.
          </p>
        </div>

        <div className="society-scroll" aria-label="Education society members">
          {members.map((member, index) => (
            <article className="society-card" key={member.image}>
              <div className="society-image-wrap">
                <img src={member.image} alt={member.label} />
              </div>
              <div className="society-card-body">
                <span className="society-number">0{index + 1}</span>
                <h3>{member.label}</h3>
                <p>Shri Jai Ram Ganga Ram Education Society</p>
              </div>
            </article>
          ))}
        </div>

        <div className="society-scroll-hint">
          <span>←</span> Swipe or scroll horizontally to view all members <span>→</span>
        </div>

        <div className="society-note">
          <strong>Member details</strong>
          <span>
            Names and designations can be added here when the official member list is provided.
          </span>
        </div>
      </div>
    </section>
  );
}

export default SocietyMembers;
