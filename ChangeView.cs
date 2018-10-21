using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;
using UnityEngine;

public class ChangeView : MonoBehaviour {

    public Camera camera;

    public GameObject[] sat;
    public GameObject[] loc;

    private Dropdown dp;
    private Image img;
    private Text text;
    public int stateManager = 0;
	void Start () {
        camera = FindObjectOfType<Camera>();
        dp = gameObject.transform.GetChild(0).GetComponent<Dropdown>();
        img = gameObject.transform.GetChild(1).GetComponent<Image>();
        text = img.transform.GetChild(0).GetComponent<Text>();
        loc = new GameObject[sat.Length];

        for (int i = 0; i < sat.Length; i++)
        {
            loc[i] = sat[i].transform.GetChild(0).GetChild(0).transform.gameObject;
        }
        img.enabled = false;
        text.enabled = false;
    }


    public void ChangeState() {
        if (dp.value == 0) 
        {
            stateManager = 0;
            camera.transform.parent = null;
        }
        if (dp.value == 1)
        {
            camera.transform.parent = sat[0].transform;
            camera.transform.position = loc[0].transform.position;
            stateManager = 1;
        }
        if (dp.value == 2)
        {
            camera.transform.parent = sat[1].transform;
            camera.transform.position = loc[1].transform.position;
            stateManager = 2;
        }

    }

    private void Update()
    {
        switch(stateManager){
            case 0:
                img.enabled = false;
                text.enabled = false;
                //Nothing
                break;
            case 1:
                camera.transform.LookAt(sat[0].transform.position);
                img.enabled = true;
                text.enabled = true;
                text.text = "Name: Hubble\nmnMotion: 15.09113886\nEccentricity: 0002848\nInclination: 028.4706\nRann: 025.306";
                break;
            case 2:
                camera.transform.LookAt(sat[1].transform.position);
                img.enabled = true;
                text.enabled = true;
                text.text = "Name: ISS\nEccentricity: 00016717\nInclination: 51.6357\nRann: 109.2219\nMembers On Board: 5 (Expedition 56)";
               break;
        }
    }
}
