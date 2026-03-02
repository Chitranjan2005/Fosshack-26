exports.analyzeRepo = async (req, res) => {
  try {
    const { repoUrl } = req.body;

    if (!repoUrl) {
      return res.status(400).json({
        error: "Repository URL is required",
      });
    }

    console.log("Received repo:", repoUrl);

    res.json({
      message: "Repo received successfully",
      repoUrl,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Something went wrong",
    });
  }
};