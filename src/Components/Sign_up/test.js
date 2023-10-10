<div
style={{
  position: "fixed",
  top: 120,
  left: width * 0.59,
  textAlign: "-webkit-center",
  width: 500,
  background: " #FFFFFF",
  boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
  borderRadius: 20,
  padding: 30,
}}
>
<button
  style={{
    fontWeight: 400,
    fontSize: 18,
    textDecorationLine: "none",
    color: "#D9D9D9",
    textAlign: "left",
    marginBottom: 20,
    float: "left",
    background: "transparent",
    border: "transparent",
  }}
  onClick={() => setScreen("For Translators")}
>
  <BsArrowLeftShort />
  <p
    style={{
      color: "#D9D9D9",
      fontSize: 18,
      textDecorationLine: "none",
      float: "right",
    }}
  >
    {REGI01_box2EN[0].label}
  </p>
</button>

<button
  style={{
    fontWeight: 400,
    textAlign: "right",
    marginBottom: 20,
    float: "right",
    color: "#D9D9D9",
    background: "transparent",
    border: "transparent",
  }}
  onClick={() => setScreen("6")}
>
  <p
    style={{
      color: "#D9D9D9",
      fontSize: 18,
      textDecorationLine: "none",
      float: "left",
    }}
  >
    {REGI01_box2EN[1].label}
  </p>
  <BsArrowRightShort />
</button>

<h2 className="textSignup">{REGI01_box2EN[2].label}</h2>
<div style={{ margin: 25 }}>
  <p>{REGI01_box2EN[3].label}</p>
</div>
{images.length < 1 ? (
  <div
    style={{
      background: "#FFFFFF",
      borderRadius: 100,
      width: 83,
      height: 80,
      padding: 15,
      position: "relative",
      borderStyle: " dotted ",
      borderColor: "#0865A8",
      borderWidth: 2,
      margin: 25,
    }}
  >
    <label htmlFor="icon-button-file">
      <Input
        accept="image/*"
        id="icon-button-file"
        type="file"
        style={{ display: "none" }}
        onChange={onImageChange}
      />
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
      >
        <MdCameraAlt
          style={{ fontSize: 35, position: "absolute" }}
        />
        <p
          style={{
            fontSize: 8,
            position: "absolute",
            top: 20,
            width: 63,
          }}
        >
          {REGI01_box2EN[3].label}
        </p>
      </IconButton>
    </label>
  </div>
) : (
  <div
    style={{
      borderRadius: 100,
      width: 100,
      height: 100,
      position: "relative",
      borderWidth: 2,
      margin: 25,
    }}
  >
    <label htmlFor="icon-button-file">
      <Input
        accept="image/*"
        id="icon-button-file"
        type="file"
        style={{ display: "none" }}
        onChange={onImageChange}
      />
      <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
      >
        {imageURLs.map((imageSrc, idx) => (
          <img
            key={idx}
            src={imageSrc}
            alt="imageURLs"
            style={{
              position: "absolute",
              width: 90,
              height: 90,
              borderRadius: "100%",
              top: -20,
            }}
          />
        ))}
      </IconButton>
    </label>
  </div>
)}

<button
  style={{
    width: "100%",
    borderRadius: 20,
    background: " #001E33",
    height: 40,
    color: "#FFFFFF",
    fontSize: 18,
    borderColor: "transparent",
    marginBottom: 10,
  }}
  onClick={() => setScreen("6")}
>
  {REGI01_box2EN[4].label}
</button>
</div>