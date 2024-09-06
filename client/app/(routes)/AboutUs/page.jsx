import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-5 gap-28 py-28">
      <h1 className="text-5xl font-extrabold tracking-tighter md:text-6xl">About Us</h1>
      <div className="flex flex-col items-center justify-center w-full h-full gap-10 max-w-7xl">
        <ul className="flex flex-col w-full space-y-4 text-sm font-medium md:text-base">
          <li>Hello! I’m Harshit Ostwal, A Dedicated And Passionate Software Developer With A Deep Expertise In C# .NET And Database Management. Over The Years, I’ve Honed My Skills In Creating Robust And Efficient Solutions For Complex Data Operations, With A Particular Focus On Product Data Management And FAQ Systems.</li>
          <li>My Journey In Software Development Has Been Driven By A Love For Problem-Solving And A Commitment To Continuous Learning. I Thrive In Environments Where I Can Apply A Structured Approach To Coding, Ensuring That The Solutions I Develop Are Not Only Effective But Also Maintainable In The Long Run. Whether It's Optimizing Database Queries, Managing Intricate Data Verification Processes, Or Integrating Seamless User Interfaces, I Approach Each Task With Precision And Creativity.</li>
        </ul>
        <ul className="flex flex-col w-full space-y-4 text-sm font-medium md:text-base">
          <li>I Have Extensive Experience Working With Microsoft Access, Where I Manage Data Verification And Insertion Tasks Across Multiple Tables And Queries. My Work In This Area Has Involved Ensuring Data Integrity And Efficiency In Operations, Which Are Crucial For The Projects I Handle. I Also Have A Keen Interest In Staying Up-To-Date With The Latest Trends In Technology, Which Allows Me To Bring Innovative Ideas And Approaches To My Work.</li>
          <li>In Addition To My Technical Expertise, I’ve Been Involved In Significant Projects Like HackWithIndia, Where I Contributed To Developing FAQ Systems And Other Critical Components. This Experience Has Not Only Enhanced My Skills But Also Deepened My Understanding Of Large-Scale Project Management.</li>
          <li>Outside Of Work, I Am A Curious Learner Who Enjoys Exploring New Technologies And Collaborating With Like-Minded Professionals. I Believe In The Power Of Teamwork And Am Always Eager To Take On New Challenges That Push The Boundaries Of What’s Possible In Software Development.</li>
        </ul>
      </div>
    </div >
  )
}