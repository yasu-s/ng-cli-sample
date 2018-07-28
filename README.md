# Overview 

This is a sample of Angular CLI execution environment.  
In addition to the basic script of Angular CLI, the following start script has been added.
* Launch Browsersync
* Unit test execution (for CI)
* TSLint execution (for CI)

# System requirements

* Node.js 8.x  
* Angular 6.x  

# Operation check  

## 1. Download Sample

```
git clone git@github.com:yasu-s/ng-cli-sample.git
```

## 2. Installing packages  

```
cd ng-cli-sample
npm install
```

## 3. Launch sample application  

```
npm start
```

# NPM Script list

<table>
<tr>
  <th>script</th>
  <th>overview</th>
</tr>
<tr>
  <td>build</td>
  <td>Build the source code.</td>
</tr>
<tr>
  <td>start:bs</td>
  <td>
    Start up with Browsersync.<br>  
    Monitor changes in the source code and also run builds.
  </td>
</tr>
<tr>
  <td>test</td>
  <td>Execute the unit test.</td>
</tr>
<tr>
  <td>test:headless</td>
  <td>
    Execute the unit test.(CI)<br>  
    Output the JUnit format test result file to ./reports/test-results.xml.<br>  
    For code coverage also output to the ./reports/coverage directory.  
  </td>
</tr>
<tr>
  <td>lint</td>
  <td>Execute the tslint.</td>
</tr>
<tr>
  <td>lint:output</td>
  <td>
    Execute the tslint.(CI)<br>   
    Output TSLint result to ./reports/tslint-result.json.
  </td>
</tr>
</table>
