import { execa } from 'execa';

(async () => {
  try {
    await execa('git', ['checkout', '--orphan', 'gh-pages']);
    console.log('build started!');
    await execa('npm', ['run', 'build']);
    console.log('build finished!');
    const folderName = 'docs';
    await execa('git', ['--work-tree', folderName, 'add', '--all']);
    await execa('git', ['--work-tree', folderName, 'commit', '-m', 'gh-pages']);

    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);

    await execa("rm", ["-r", folderName]);
    await execa("git", ["checkout", "-f", "master"]);
    await execa("git", ["branch", "-D", "gh-pages"]);
    console.log("Successfully deployed");
  }
  catch (e) {
    console.log("Build Failed! ", e.message);
    process.exit(1);
  }
})();
