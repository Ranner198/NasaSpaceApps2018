using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FlyScript : MonoBehaviour {

    public float speedH = 2.0f;
    public float speedV = 2.0f;
    public float speed = 20;
    public float UpDown = 0;
    private float yaw = 0.0f;
    private float pitch = 0.0f;

    void Awake()
    {
        pitch = gameObject.transform.rotation.x;
        yaw = gameObject.transform.rotation.y;
    }

    void Update()
    {
        if (Input.GetKey(KeyCode.E)) {
            UpDown = 1;
        }
        else if (Input.GetKey(KeyCode.Q))
        {
            UpDown = -1;
        }
        else
            UpDown = 0;

        Vector3 movement = new Vector3(Input.GetAxis("Horizontal"), UpDown, Input.GetAxis("Vertical"));

        transform.Translate(movement * Time.deltaTime * speed);

        if (Input.GetMouseButton(0))
        {
            yaw += speedH * Input.GetAxis("Mouse X") * Time.deltaTime * 60;
            pitch -= speedV * Input.GetAxis("Mouse Y") * Time.deltaTime * 60;
            var change = Quaternion.Euler(pitch, yaw, 0.0f);
            transform.rotation = Quaternion.Slerp(transform.rotation, change, Time.deltaTime);
        }
    }
}
