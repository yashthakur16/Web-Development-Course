document.addEventListener("DOMContentLoaded",()=> 
{
    const searchbutton=document.getElementById("button");
    const username=document.getElementById("username");
    const stats=document.querySelector("stats");
    const graph1=document.querySelector("#graph1");
    const graph2=document.querySelector("#graph2");
    const graph3=document.querySelector("#graph3");
    const info=document.querySelector(".form")
    const easyLabel=document.querySelector("#easyLabel");
    const mediumLabel=document.querySelector("#mediumLabel");
    const hardLabel=document.querySelector("#hardLabel");
    const rectangle=document.querySelector(".rectangle");


    function validateUsername(username)
    {
        if(username.trim()==="")
        {
            alert("Username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching =regex.test(username);
        return isMatching;

    }


    async function fetchUserDetails(username)
    {
        const url = 'https://leetcode-stats-api.herokuapp.com/'+username;
        try
        {
            searchbutton.textContent="Searching"
            searchbutton.disabled=true;
            const response = await fetch(url);
            if(!response.ok)
            {
                throw new Error("Unable to fetch details");
            }
            let data=await response.json();
            console.log(data);
            if(data.status ==="error")
            {
                throw new Error("usename")
            }
            displayUserData(data);
        }
        catch(error)
        {
            info.innerHTML +='<p>No Data Found</p>'
        }
        finally
        {
            searchbutton.textContent="Search"
            searchbutton.disabled=false;
        }
    }

    function updateProgress(solved,total,label,circle)
    {
        const progressDegree = (solved / total) * 100;
        circle.style.setProperty('--progress-degree',`${progressDegree}%`)
        label.textContent = `${solved}/${total}`;
    }

    function displayUserData(data)
    {
        const totalQues=data.totalQuestions;
        const totalEasy=data.totalEasy;
        const totalMedium=data.totalMedium;
        const totalHard=data.totalHard;

        const totalSolved=data.totalSolved;
        const easySolved=data.easySolved;
        const mediumSolved=data.mediumSolved;
        const hardSolved=data.hardSolved;

        updateProgress(easySolved,totalEasy,easyLabel,graph1);
        updateProgress(mediumSolved,totalMedium,mediumLabel,graph2);
        updateProgress(hardSolved,totalHard,hardLabel,graph3);

        rectangle.innerHTML=`
        <h3>User Statistics</h3>
        <p>Total Questions Solved: ${totalSolved}</p>
        <p>Ranking: ${data.ranking}</p>
        <p>Easy: ${easySolved} / ${totalEasy}</p>
        <p>Medium: ${mediumSolved} / ${totalMedium}</p>
        <p>Hard: ${hardSolved} / ${totalHard}</p>`;




    }

    searchbutton.addEventListener("click",()=> 
    {
        const usernameValue=username.value;
        console.log(usernameValue);
        if (validateUsername(usernameValue))
        {
            fetchUserDetails(usernameValue);
        }
    })
})