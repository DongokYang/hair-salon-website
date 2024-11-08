const wrapper = document.getElementById("instagram");
fetch("https://www.instagram.com/twicetagram/")
  .then((a) => {
    return a.text();
  })
  .then((a) => {
    const media = JSON.parse(
      a.slice(
        a.indexOf("edge_owner_to_timeline_media") + 30,
        a.indexOf("edge_saved_media") - 2
      )
    );
    media.edges.forEach((m) => {
      const node = m.node,
        a = document.createElement("a"),
        img = document.createElement("img");

      (a.target = "_blank"),
        (a.href = `https://www.instagram.com/p/${node.shortcode}/`),
        (img.src = node.display_url),
        a.append(img),
        wrapper.append(a);
    });
  });
