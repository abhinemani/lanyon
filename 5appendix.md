---
layout: page
title: "Appendix"
---

## Definitions

* **Dataset**: Contents of a single database table, worksheet or defined view; data is provided as a single combination of unique rows (or records) and corresponding columns (or fields) describing that row
* **Database**: A database may contain several data tables - each data table constitutes a dataset. However, you could also create new datasets by combining data from different tables into a new table.
* **Data Schema or Standard**: Specification that defines the structure of the data (i.e. required data elements and types and supporting definitions)
* **Data source**: Technology or system that stores data, including databases, named spreadsheets, information systems, business applications, etc.
* **ETL**: Extract, Transform, Load: three database functions that are combined into one tool to pull data out of one database and place it into another.
	* *Extract* - process of reading data from a database.
	* *Transform* - process of converting the extracted data from its previous form into the form it needs to be in so that it can be placed into another database.  (rules, lookup tables, combining with other data)
	* *Load* - process of writing the data into the target database.
* **Geospatial data**: Data related to the position of things in the real world, including boundaries or locations
* **Metadata**: Descriptive information about a dataset
* **Tabular**: Data that is presented in columns or tables
* **Taxonomy or Category**: Methodology by which items or datasets are classified or grouped under a similar theme or topic

## Draft Data Checklist Template

* Department/Division	
* Dataset name	
* Brief description of data	
* Data Steward (Business knowledge) - Name	
* Data Steward (Business knowledge) - Email	
* Data source
	- What information system or database contains the data? 
* Data Collection Mechanism
	- Through what process (e.g. calls, inspections, etc) was this data collected?
* What information system or database contains the data? 	
* Start date: (MM/DD/YYYY)
* End date: (MM/DD/YYYY; if the data is still being updated, use "Current")
* Geographic coverage	
* Geographic granularity: (address, census tract, county, zip code)
* Update Frequency: (Daily, monthly, quarterly, annually)
* Collection Frequency: (Daily, monthly, quarterly, annually)
* Existing publication: (Y/N)	
* Link to existing publication (If exists)	
* Priority/value: (High, Medium, or Low)
* Priority/value comments	
* Technical challenges	
* Data Classification: (PUBLIC; PROTECTED; or SENSITIVE.)
* Protected - Details (If selected)	
* Sensitive - Details: (Level 1, Level 2, Level 3; if selected)	
* Data Quality: (High, Medium, or Low)
* Data Quality - Details	

## Security Considerations
When considering a dataset for publication on data.lacity.org, it’s review process will differ based on which security level it falls into:

### Level One
* Unrestricted data tables that can be released to the public and published without restriction 

### Level Two

* Data tables that have some level of restriction or sensitivity (see detail below) but currently can be made available to interested parties with a signed data use agreement. Data use agreements between the participating Department and the end-user currently guide the sharing of data.
* Data tables that have shared or complex ownership (e.g., surveys administered by a third party for the participating Department).
* Data tables with a higher level of sensitivity defined by:
    * Sharing the data has not been mandated by the Legislature, an auditing entity, or other entity outside the participating Department. 
    * The data table has implicit or direct policy implications
    * The data table is likely to attract media attention (either positive or negative) or is subject to ongoing media interest.
    * There is legislation pending or recently passed related to the data table. A legislator has held or scheduled hearings on the content area of the data table. The data table will likely attract legislative interest. There is pending enforcement action or litigation related to this data table.

### Level Three
* Level three databases are highly restricted due to PII, HIPAA, state, or federal law. These data will NOT be accessible through the Open Data Portal.


## Role Descriptions
### Chief Data Officer (CDO): 
The CDO is designated by the Mayor and is accountable for the city’s overall implementation of the open data policy. The CDO will support and facilitate collaboration across departments and with other local entities (developers, universities, corporations, start-ups, non-profits, civic organizations, etc) using open data to experiment and develop new technologies, visualizations, and applications with the goal of identifying cost-effective solutions to improve our government and community. Participation between City departments, elected officials, and the public will ensure that the Citywide Open Data Portal (Data.LACity.org) will be a dynamic, growing platform for the City to share information, promote efficiency, and foster innovation for years to come. General responsibilities include:

* Provide City agencies as-needed tools, trainings, and resources to effectively meet the Open Data Policy and promote the culture of data-driven policy and performance.
* Host collaborative dialogues amongst interested (relevant ITPC members, city staff, and/or the public) to explore best practices in Open Data and discuss how best to leverage it for the City
* Proactively determine, assist the City to implement, and support the public engagement strategy, including outreach and public inquiries.
* Collaborate with other local, state, and federal government entities on open government strategies and data specifications/standards. 
* Proactively facilitate the identification and communication to the departments of high value datasets to load, as well their timeline for release; these are datasets requested by the public, or other entities or government agencies. 
* Document and maintain ongoing policies and guide modifications (Open Data Policy & Guide) for the efficient and effective implementation of Open Data (e.g. City Data Dictionary, etc).
* Update, audit and administrate the Open Data Portal Data Catalog, including featured datasets, discussion comments, and dataset requests.
* In conjunction with the Mayor’s Communication staff, review and make final approval of initial department datasets using electronic workflow features in the Open Data Portal and procedures outlined in this Guide.   
* Update and maintain the Open Data Portal home page, including featured articles and applications, and collaborating with relevant department and elected offices to identify content.

### Data Coordinators: 
Every city department is tasked with identifying at least one (1) of its staff as the Department’s Open Data Coordinator, who should be well-connected to or a part of the Department’s efforts in:

* Liaise with the Chief Data Officer and the Mayor’s Office in support of the Open Data Portal
* Work with Department staff and the CDO to identify high-value datasets for publication to the Open Data Portal
* Whenever possible, document and share stories or examples of how open data is being leveraged in their Department
* Respond in a timely fashion (within 48 business hours) to public comment on datasets posted.
* Contribute to the Open Data Policy and Guide, on behalf of the Department
* Ensure that a Department specific Internal Review and Approval Process is in place to provide verification and approval of data to be published
* Make all appropriate data available online through data.lacity.org or for financial data, ControlPanelLA
* Departments will commit to an appropriate refresh cycle for their data; dependent on the nature and use of the dataset and adhere to the best of their ability, to the designated refresh cycle.
* When engaging with contractors or outside vendors, departments should include services or provisions to ensure relevant data is loaded to data.LACity.org.

### Data Stewards:
Data Stewards are individuals in charge of individual databases, datasets, or information systems. In general, a data steward has business knowledge of the data and can answer questions about the data itself. General responsibilities likely include:

* Managing the dataset or source and authorizing changes to it
* Managing access to and use of the data, including documentation
* Managing accuracy, quality and completeness of the data

### Information Technology Agency (ITA):
ITA has established and will manage the Open Data Portal vendor contract, which will include citywide annual maintenance and contractual provisions for optional services available for departmental use (e.g., featured application development, API development, etc.).  The ITA will budget for ongoing maintenance fees for core services; optional services must be budgeted by individual departments.  The ITA will also make all appropriate ITA owned/primarily managed datasets available through the Open Data Portal. 
 
### The IT Policy Committee (ITPC)
ITPC shall be a governing body that provides citywide department coordination of the issues, requests and enhancements that will affect the policies and procedures related to the departmental publishing of data to the City’s enterprise Open Data Portal – data.lacity.org.  responsibilities for Open Data are: The ITPC responsibilities for Open Data are:

* Establishing and contributing to the Open Data Policy.
* Providing a monthly forum for Department IT Professionals to discuss implementation of Open Data at the City of Los Angeles. 
* Establishing ongoing policies and guidelines for the efficient and effective implementation of Open Data (e.g. City Data Dictionary, etc).
