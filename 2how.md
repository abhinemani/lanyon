---
layout: page
title: "Part 2: How We Open Data"
---


## Data Criteria: Quality, Refresh & Permanence
The City’s commitment is not merely to open all appropriate data, but to do so in such a way that is useful, relevant, and respectful of security and privacy concerns. This policy delimits five requirements for data publication from any and all city departments.

Data should be:

* High Quality: Data should be as complete as possible, vetted for reasonability and accuracy, and include, when available, historical data to put current data in context.
* Respectful of Privacy and Security concerns: Data should be release in accordance with city, state, and federal regulation around individual privacy, and no data should be released that might threaten public safety.
* Well documented: Data should include robust metadata[^1], that is, a description of its source, license, topic, and explanation of any unclear terms -- written in plain English for public consumption.
* Up-to-Date: Data should be refreshed with up-to-date information as frequently as possible.
* Permanent: Barring substantial issues with any of the above requirements, open data should be considered permanently open; that is, it should not be deleted or removed from the public view.

In subsequent sections, this playbook details specific instructions on how City Staff and Data partners can comply with these expectations.

## Governance & Responsibilities
To effectively fulfill on the requirements of the Open Data Executive Directive, the City has developed a comprehensive, yet nimble governance structure relying on stakeholders from the departments and the Mayor’s Office. Note that this is an iterative governance model, and will evolve based on feedback.

### Stakeholders
The Program relies on the involvement of three key organizations: the departments, the Information Technology Agency (ITA), and the Mayor’s Office. The effective collaboration of these three groups, and key individuals within them, should result in the publication of relevant, accurate, and up-to-date data. The following details the key responsibilities of each group and the general roles within them.[^2]

#### Who’s Who?

![Roles]({{ site.baseurl }}/public/img/roles.png)

#### Department
* Department Leadership: GM, AGM, or designee for the department who will provide final department-level approval for data publication, prior to Mayor’s Office review.
* Open Data Coordinators: Appointed open data liaisons  within each department (ranges from 1-5), who run the department’s Open Data efforts; maintains data inventory and timeline; enforces data refresh expectations; handles data upload for the department, with Leadership’s approval.[^3]
* Data Steward/Owner: Subject matter expert or operational lead for the specific dataset being opened who will work with the Coordinator to identify the data source, prepare it for publication, draft the metadata, and ensure the data meets quality guidelines.

#### ITA
* ITA Data Leadership: ITA Executive Management and Open Data Contract Administrator who maintain the Open Data Portal software contract; coordinates feedback, bugs, and feature requests with the vendor. Beyond these key individuals in the approval process, ITA facilitates the Information Technology Planning Committee, the governing body that provides citywide department coordination of policies and procedures related to open data. 
* Chief Information Security Officer (CISO): City’s lead on information security, who will perform a security audit on datasets before publication.

#### Mayor’s Office
* Chief Data Officer (CDO): Main city executive responsible for the Open Data program, who will oversee operations, ensure relevant parties are engaged throughout the process, coordinate with ITA on the technology necessary, and serve as chief evangelist for the city’s open data in the community, with other governments, and nationally.
* Policy Teams (i.e. relevant Mayor’s Office): Representatives from the various four Mayor’s Offices, who will be kept apprised of any potential data releases and provide input on any policy implications.
* Communications Team: Digital coordinator and press secretary who will coordinate with CDO on timeline and publication of open data sets. 

These stakeholders will work collaboratively on every dataset published to ensure it meets the City’s expectations. 

### Review & Approval Process

![Overview]({{ site.baseurl }}/public/img/overview.png)

Which data sets will be opened will be determined through a data inventory process developed by Departmental Open Data Coordinators, in collaboration with the CDO. Once a dataset is identified, however, all the key stakeholders will be engaged through the following review and approval process. 

Key areas of consideration when releasing data, as described above, are data quality, security concerns, and potential privacy breaches. For each of these, the City has constructed standard frameworks for assessment, which have been developed into checklists. At each stage of the process, these checklists will be organizing assets to support efficient and consistent review and approval. 

Each department may (and should) develop its own internal data review process in a more robust or distinct fashion, but these checklists and the key steps indicated below are essential for all departments to ensure a uniform process. 
 
At the department-level, the Open Data Coordinator and the Data Steward/Owner are responsible for preparing the data with a focus on data quality and documentation; once ready they shall deliver the draft data to the CDO, who shall coordinate with ITA and the Mayor’s Office to vet the release for legal (security, privacy) and quality issues through standard frameworks and craft then execute a strategic publication plan. 

#### Step 1: Department Level Organization and Approval
For a particular dataset, the Open Data Coordinator will identify a Data Steward, someone in the Department with subject-matter expertise in the topic covered. The Data Steward will take the lead on gathering the data, cleaning it up as necessary, and drafting the “Data Submission Checklist”.  (This checklist features basic questions on quality, frequency of refresh, and license, and asks for sample metadata.)[^4] Once drafted, the Open Data Coordinator will review, along with the data itself, and submit to the Department Leadership (e.g. AGM) for approval. 

If approved, the Data Coordinator should publish the data as private for Stage 1 review to the Open Data Portal, and share the Data Submission Checklist review to the CDO, who will lead the execution of the remaining steps of the approval process.

#### Step 2: ITA Security and Quality Review
The CDO will review the proposed release for security, quality, and privacy issues, relying on the included Checklists for each category. If any issues arise, the CDO will coordinate with the ITA Data Leadership, the CISO, and the Policy team for input on the necessary audits and updates. If those issues rise to a prohibitive level, then the CDO will return to the department’s open data coordinator for response and update.

If approved at this stage, the CDO will begin to develop a publication strategy with the Mayor’s Office Communications and Policy teams to promote awareness within the citizen, vendor, and developer communities.

#### Step 3: Strategic Publication
Given the commitment to ensuring published data reaches those interested in it, the City will thoughtfully consider how and when to release the data set. The CDO will work with the Mayor’s Communications and Policy teams to coordinate a publication strategy. Tactics may include, but is not limited to: blog post, social media, press release, incorporation with a public event or another announcement, and hosting a specific event (e.g. hack-a-thon, etc).  Once the publication strategy is in place, the CDO will accordingly publish the data, notifying the department stakeholders and ITA. Following that, the Open Data Coordinator and Data Steward will be responsible for keeping the data up-to-date and accurate.

In summary, at the department-level, the Open Data Coordinator and the Data Steward/Owner are responsible for preparing the data with a focus on data quality and documentation; once ready they shall deliver the draft data to the CDO, who shall coordinate with ITA and the Mayor’s Office to vet the release for legal (security, privacy) and quality issues through standard frameworks and craft then execute a strategic publication plan. 

![Details]({{ site.baseurl }}/public/img/flow.png)

## Communications
With the number of stakeholders, ensuring clear and organized communications is critical. To organize communications, the City relies on the Open Data Portal’s automatic notification and workflow management system. 

* Workflow: The Portal has three settings: not ready, Stage 1, and Stage 2. “Not Ready” indicates a department is still working on the dataset; when a dataset enters Stage 1, the CDO will be notified automatically; once approved and made public in Stage 2, the department and the relevant policy team will be notified. [^5]
* Public Comment: The Open Data Portal features a public discussion feature. Whenever a comment is posted, the relevant Open Data Coordinator and CDO will be notified. It is the Coordinator’s responsibility to respond, though it is recommended they do so in consultation with the Data Steward and, if necessary, Departmental Leadership and Communications teams.
* Support / Questions: As issues or feature requests regarding the Open Data Platform itself arise, all employees should reach out to the CDO, copying the ITA Data Leadership, to coordinate a communication to the vendor.  This includes requested enhancements or modifications to the City Open Data Portal (Data.LACity.org) or the addition of new open data portals and functionality.
* Open Data Work Group: Every quarter the CDO will convene an Open Data Working Group, requesting participation from at least one representative from each department; this meeting will be recommended, but not mandatory. The work group is designed as a forum to a) work through persistent issues; b) collaborate on projects; c) share best practices and updates on projects; and d) run trainings and workshops on new tools/technology.

## Goal & Procedure for Keeping the Policy & Playbook Current
The City’s Chief Data Officer, the Chief Innovation and Technology Officer – Mayor’s Office, the Information Technology Agency (ITA), Information Technology Policy Committee (ITPC) and its members will contribute to the contents of this document, as needed.  To facilitate and coordinate citywide requests to modify the Open Data Policy and Guide for dataset processing, all questions on or requests to modify this document should be directed to the City’s Chief Data Officer at mayor.opendata@lacity.org, as the point of contact.  

## Notes
[^1]: See appendix for definition
[^2]: Longer descriptions of the responsibilities for each individual are included in the appendix.
[^3]: See appendix for list
[^4]: See appendix for sample checklist
[^5]: Currently, all administrators of the portal are notified for any and all interactions with the site. This is a proposed change to streamline communications.