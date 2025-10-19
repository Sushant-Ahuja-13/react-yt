import Card from './components/Card'
const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    posted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85 / hour",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    posted: "10 days ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$70 / hour",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    posted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$80 / hour",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    posted: "7 days ago",
    post: "Product Manager",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90 / hour",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    posted: "12 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$78 / hour",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    posted: "2 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95 / hour",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    posted: "4 days ago",
    post: "Autopilot Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$82 / hour",
    location: "Palo Alto, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    posted: "8 days ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$100 / hour",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    posted: "6 days ago",
    post: "UX/UI Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$60 / hour",
    location: "San Jose, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    posted: "9 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$68 / hour",
    location: "San Francisco, USA"
  }
];
  // console.log(jobOpenings);
  return (
    <div className="parent">
      {jobOpenings.map(function(elem,idx) {
        return <Card key={idx} location={elem.location} pay={elem.pay} tag2={elem.tag2} tag1={elem.tag1} post={elem.post} brandLogo={elem.brandLogo} companyName={elem.companyName} posted={elem.posted}/>
      })}
    </div>
  )
}

export default App
