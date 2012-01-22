# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard :shell do
  watch(%r{^public/scripts/(.+)\.dart$}) { |m| `frogc #{m[0]}` }
end
