const CaroselBlog = () => {
  return (
    <main className="h-128 bg-sky-50 ">
      {dataArr.map((item, index) => (
        <div key={index} className="absolute text-center">
          <h1>{item.judul}</h1>
          <section>
            <p>{item.email}</p>
            <p>{item.outher}</p>
          </section>
          <p>{item.des}</p>
        </div>
      ))}
    </main>
  );
};

export default CaroselBlog;
const dataArr = [
  {
    judul:
      "Decet aedificium volubilis perspiciatis delego vobis deripio defessus sit.",
    des: "Curvo clibanus thesaurus. Arto id vestrum. Ara ventus amissio. Atque usque ager. Sed cinis abstergo. Rerum adfectus incidunt. Suadeo votum sortitus. Arguo verto eveniet. Curvus vulariter subito. Maiores aegre debilito. Cumque chirographum adfectus. Calcar ademptio decet.",
    outher: "Dharitri Mishra DDS",
    email: "dds_dharitri_mishra@bernhard.example",
  },
  {
    judul:
      "Decet aedificium volubilis perspiciatis delego vobis deripio defessus sit.",
    des: "Curvo clibanus thesaurus. Arto id vestrum. Ara ventus amissio. Atque usque ager. Sed cinis abstergo. Rerum adfectus incidunt. Suadeo votum sortitus. Arguo verto eveniet. Curvus vulariter subito. Maiores aegre debilito. Cumque chirographum adfectus. Calcar ademptio decet.",
    outher: "Dharitri Mishra DDS",
    email: "dds_dharitri_mishra@bernhard.example",
  },
  {
    judul:
      "Decet aedificium volubilis perspiciatis delego vobis deripio defessus sit.",
    des: "Curvo clibanus thesaurus. Arto id vestrum. Ara ventus amissio. Atque usque ager. Sed cinis abstergo. Rerum adfectus incidunt. Suadeo votum sortitus. Arguo verto eveniet. Curvus vulariter subito. Maiores aegre debilito. Cumque chirographum adfectus. Calcar ademptio decet.",
    outher: "Dharitri Mishra DDS",
    email: "dds_dharitri_mishra@bernhard.example",
  },
];
