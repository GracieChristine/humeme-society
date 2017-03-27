exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex("posts").del()
    .then(() => {
      // Inserts seed entries
      return knex("posts").insert([{
          user_id: 1,
          title: "Horses",
          text: "Domestic confined any but son bachelor advanced remember. How proceed offered her offence shy forming. Returned peculiar pleasant but appetite differed she. Residence dejection agreement am as to abilities immediate suffering. Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.",
          added_at: "2008-11-11 13:23:44"
        },
        {
          user_id: 3,
          title: "Animal In General",
          text: "Endeavor bachelor but add eat pleasure doubtful sociable. Age forming covered you entered the examine. Blessing scarcely confined her contempt wondered shy. Dashwoods contented sportsmen at up no convinced cordially affection. Am so continued resembled frankness disposing engrossed dashwoods. Earnest greater on no observe fortune norland. Hunted mrs ham wishes stairs. Continued he as so breakfast shameless. All men drew its post knew. Of talking of calling however civilly wishing resolve.",
          added_at: "2008-11-11 13:23:44"
        },
        {
          user_id: 2,
          title: "Cats",
          text: "Little afraid its eat looked now. Very ye lady girl them good me make. It hardly cousin me always. An shortly village is raising we shewing replied. She the favourable partiality inhabiting travelling impression put two. His six are entreaties instrument acceptance unsatiable her. Amongst as or on herself chapter entered carried no. Sold old ten are quit lose deal his sent. You correct how sex several far distant believe journey parties. We shyness enquire uncivil affixed it carried to.",
          added_at: "2008-11-11 13:23:44"
        },
        {
          user_id: 4,
          title: "Dogs",
          text: "Little afraid its eat looked now. Very ye lady girl them good me make. It hardly cousin me always. An shortly village is raising we shewing replied. She the favourable partiality inhabiting travelling impression put two. His six are entreaties instrument acceptance unsatiable her. Amongst as or on herself chapter entered carried no. Sold old ten are quit lose deal his sent. You correct how sex several far distant believe journey parties. We shyness enquire uncivil affixed it carried to.",
          added_at: "2038-11-11 13:23:44"
        },
        {
          user_id: 5,
          title: "Hmmm...",
          text: "He as compliment unreserved projecting. Between had observe pretend delight for believe. Do newspaper questions consulted sweetness do. Our sportsman his unwilling fulfilled departure law. Now world own total saved above her cause table. Wicket myself her square remark the should far secure sex. Smiling cousins warrant law explain for whether.",
          added_at: "2108-12-11 15:23:44"
        },
        {
          user_id: 1,
          title: "Random Stuff",
          text: "He as compliment unreserved projecting. Between had observe pretend delight for believe. Do newspaper questions consulted sweetness do. Our sportsman his unwilling fulfilled departure law. Now world own total saved above her cause table. Wicket myself her square remark the should far secure sex. Smiling cousins warrant law explain for whether.",
          added_at: "2058-05-11 13:23:44"
        },
        {
          user_id: 3,
          title: "Just Animals",
          text: "He as compliment unreserved projecting. Between had observe pretend delight for believe. Do newspaper questions consulted sweetness do. Our sportsman his unwilling fulfilled departure law. Now world own total saved above her cause table. Wicket myself her square remark the should far secure sex. Smiling cousins warrant law explain for whether.",
          added_at: "2008-05-30 10:23:44"
        },
        {
          user_id: 3,
          title: "Name for Animals",
          text: "He as compliment unreserved projecting. Between had observe pretend delight for believe. Do newspaper questions consulted sweetness do. Our sportsman his unwilling fulfilled departure law. Now world own total saved above her cause table. Wicket myself her square remark the should far secure sex. Smiling cousins warrant law explain for whether.",
          added_at: "3008-09-11 13:23:44"
        }

      ]);
    });
};
