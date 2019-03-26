const initState = {
  projects: [
    {
      id: 1,
      title: "project one",
      content: "asd sadfs s sf dsf asoh dgf sad ophds fsad ph afs"
    },
    {
      id: 2,
      title: "project two",
      content: "qwe qwewq qwee dsf asoh dgf sad ophds fsad ph afs"
    },
    {
      id: 3,
      title: "project three",
      content: "zxc bv zxczxcf dsf asoh dgf sad ophds fsad ph afs"
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
    console.log('project created', action.project)
  }
  return state;
};

export default projectReducer;
