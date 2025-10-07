const Profile = () => {
  return (
    <section id="profile" className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto animate-in fade-in duration-700">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Profil
        </h2>
        <div className="bg-background rounded-2xl p-8 md:p-12 shadow-soft border border-border">
          <p className="text-lg leading-relaxed text-foreground">
            Mahasiswa Matematika di Institut Teknologi Sepuluh Nopember dengan minat dalam bidang 
            organisasi dan machine learning. Memiliki kemampuan analisis yang baik, logika matematika 
            yang kuat, serta berkomitmen dalam mengembangkan diri di bidang teknologi dan kepemimpinan. 
            Aktif dalam organisasi kampus serta memiliki dasar dalam pemrograman dan penerapan machine learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
