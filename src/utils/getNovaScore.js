import Nova1 from "../assets/Home/nova-score/NOVA_group_1.svg.png";
import Nova2 from "../assets/Home/nova-score/NOVA_group_2.svg.png";
import Nova3 from "../assets/Home/nova-score/NOVA_group_3.svg.png";
import Nova4 from "../assets/Home/nova-score/NOVA_group_4.svg.png";

const novaImages = {
  1: Nova1,
  2: Nova2,
  3: Nova3,
  4: Nova4,
};

export const getNovaScore = (product) => {
  if (
    product.nova_groups_tags &&
    Array.isArray(product.nova_groups_tags) &&
    product.nova_groups_tags.length > 0
  ) {
    // Example: "en:3-processed-foods"
    const tag = product.nova_groups_tags[0];
    const match = tag.match(/en:(\d)/);
    if (match) {
      const group = parseInt(match[1], 10);
      return novaImages[group] || null;
    }
  }
  return null;
};
